package domain

import "time"

type Blog struct {
	ID             string
	Title          string
	Description    string
	MainPictureURL string
	Category       string
	Views          int
	CreationDate   time.Time
}

type BlogUsecase interface {
	GetBlogs() ([]Blog, *int, error)
}

type BlogRepository interface {
	GetBlogs() ([]Blog, *int, error)
}
