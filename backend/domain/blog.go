package domain

import "time"

type Blog struct {
	ID             string
	Title          string
	Description    string
	MainPictureURL string
	Category       string
	Views          int64
	CreationDate   time.Time
}

type BlogUsecase interface {
	GetBlogs() ([]Blog, *int64, error)
}

type BlogRepository interface {
	GetBlogs() ([]Blog, *int64, error)
}
