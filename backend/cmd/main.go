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
)

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

	r.Mount("/users", handler.NewUserHandler(userService).Routes())

	if err := http.ListenAndServe(fmt.Sprintf(":%s", config.API_PORT), r); err != nil {
		log.Printf("[routes] error: %s", err.Error())
	}
}