package main

import (
	"fmt"
	"log"
	"net/http"

	"portfolio/backend/config"
	infrastructure "portfolio/backend/infrastructure/repository/mongo"
	"portfolio/backend/user/delivery/handler"
	"portfolio/backend/user/repository/mongo"
	"portfolio/backend/user/usecase"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
	"github.com/go-chi/render"
	httpSwagger "github.com/swaggo/http-swagger"
)

// @title           Sudo-von API
// @version         1.0.0
// @description     Official documentation to consume the API. You can find out more about this API at https://github.com/sudo-von/frontend.
// @termsOfService  http://swagger.io/terms/

// @securityDefinitions.basic BasicAuth

// @contact.name   Jesús "VoN" Rodríguez
// @contact.url    https://mx.linkedin.com/in/jes%C3%BAs-%C3%A1ngel-rodr%C3%ADguez-mart%C3%ADnez-84991a1b4
// @contact.email  sudo.von.contact@gmail.com

// @BasePath  /api/v1

// @securityDefinitions.basic  BasicAuth
// @securityDefinitions.apiKey BearerJWT
// @in header
// @name Authorization
// @tokenUrl http://localhost.com:4000/api/v1/users/login
func main() {

	log.Println("[main]: Starting a new connection to the database...")
	db, err := infrastructure.NewMongoDatabase(config.DB_URL, config.DB_NAME, config.DB_USER, config.DB_PASSWORD, config.DB_PORT)
	if err != nil {
		log.Panic("[main] error:", err)
	}
	log.Println("[main]: database connection established")

	userRepository := mongo.NewMongoUserRepository(db)
	userService := usecase.NewUserUsecase(userRepository)

	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middleware.URLFormat)
	r.Use(render.SetContentType(render.ContentTypeJSON))

	cors := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token", "File-Name"},
		ExposedHeaders:   []string{"Link", "File-Name", "Authorization"},
		AllowCredentials: true,
		MaxAge:           300,
	})

	r.Use(cors.Handler)

	r.Mount("/api/v1/swagger", httpSwagger.WrapHandler)
	r.Mount("/api/v1/users", handler.NewUserHandler(userService).Routes())

	if err := http.ListenAndServe(fmt.Sprintf(":%s", config.API_PORT), r); err != nil {
		log.Printf("[routes] error: %s", err.Error())
	}
}
