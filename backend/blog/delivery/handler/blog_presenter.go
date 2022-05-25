package handler

import (
	"net/http"
	"portfolio/backend/domain"
)

type BlogResponseList struct {
	Blogs []BlogResponse `json:"result"`
	Total int64          `json:"total" example:"1"`
}

func (brl *BlogResponseList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

type BlogResponse struct {
	ID             string `json:"id" example:"613aab578a6ef50007e622be"`
	Title          string `json:"title" example:"SQLInjection"`
	Description    string `json:"description" example:"How to perform a SQLInjection attack"`
	MainPictureURL string `json:"main_picture_url" example:"https://www.fake-main-picture-url.com/sqlinjection"`
	Category       string `json:"category" example:"hacking"`
	Views          int64  `json:"views" example:"1000"`
	CreationDate   string `json:"creation_date" example:"2021-10-10"`
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
		CreationDate:   blog.CreationDate.Local().Format("2006-01-02"),
	}
}
