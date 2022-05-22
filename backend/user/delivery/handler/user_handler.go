package handler

import (
	"net/http"

	"portfolio/backend/domain"
	"portfolio/backend/error/delivery/handler"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

type UserHandler struct {
	UserUsecase domain.UserUsecase
}

func NewUserHandler(userUsecase domain.UserUsecase) *UserHandler {
	return &UserHandler{
		UserUsecase: userUsecase,
	}
}

func (h *UserHandler) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/{id}", h.GetUserByID)
	return r
}

func (h *UserHandler) GetUserByID(w http.ResponseWriter, r *http.Request) {

	requestedUserID := chi.URLParam(r, "id")

	user, err := h.UserUsecase.GetUserByID(requestedUserID)
	if err != nil {
		render.Render(w, r, handler.ErrInvalidRequest(err))
		return
	}

	w.Header().Set("Content-Type", "application/json")
	render.Status(r, http.StatusOK)
	render.Render(w, r, ToResponseUser(user))
}
