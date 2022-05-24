package usecase

import (
	"fmt"
	"portfolio/backend/domain"
)

type BlogUsecase struct {
	blogRepository domain.BlogRepository
}

func NewBlogUsecase(blogRepository domain.BlogRepository) *BlogUsecase {
	return &BlogUsecase{
		blogRepository: blogRepository,
	}
}

func (u *BlogUsecase) GetBlogs() ([]domain.Blog, *int64, error) {
	blogs, total, err := u.blogRepository.GetBlogs()
	if err != nil {
		return nil, nil, fmt.Errorf("GetBlogs: %w", err)
	}
	return blogs, total, nil
}
