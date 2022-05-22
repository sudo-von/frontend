package handler

import (
	"net/http"
	"portfolio/backend/domain"
)

type UserResponse struct {
	ID                string `json:"id"`
	Username          string `json:"username"`
	Name              string `json:"name"`
	Email             string `json:"email"`
	ProfilePictureURL string `json:"profile_picture_url"`
}

func (ur *UserResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func ToResponseUser(user *domain.User) *UserResponse {
	return &UserResponse{
		ID:                user.ID,
		Username:          user.Username,
		Name:              user.Name,
		Email:             user.Email,
		ProfilePictureURL: user.ProfilePictureURL,
	}
}
