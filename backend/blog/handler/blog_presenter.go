package handler

import (
	"net/http"
	"portfolio/backend/domain"
	"time"
)

type BlogResponseList struct {
	Blogs []BlogResponse `json:"result"`
	Total int            `json:"total"`
}

func (brl *BlogResponseList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

type BlogResponse struct {
	ID             string    `json:"id"`
	Title          string    `json:"title"`
	Description    string    `json:"description"`
	MainPictureURL string    `json:"main_picture_url"`
	Category       string    `json:"category"`
	Views          int       `json:"views"`
	CreationDate   time.Time `json:"creation_date"`
}

func (br *BlogResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func BlogToBlogResponse(blog *domain.Blog) *BlogResponse {
	return &BlogResponse{
		ID:             blog.ID,
		Title:          blog.Title,
		Description:    blog.Description,
		MainPictureURL: blog.MainPictureURL,
		Category:       blog.Category,
		Views:          blog.Views,
		CreationDate:   blog.CreationDate,
	}
}
