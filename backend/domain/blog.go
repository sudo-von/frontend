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

type BlogUseCase interface {
	GetBlogs() ([]Blog, error)
}

type BlogRepository interface {
	GetBlogs() ([]Blog, error)
}
