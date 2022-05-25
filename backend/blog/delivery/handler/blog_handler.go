package handler

import (
	"net/http"

	"portfolio/backend/domain"
	"portfolio/backend/error/delivery/handler"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

type BlogHandler struct {
	BlogUsecase domain.BlogUsecase
}

func NewBlogHandler(blogUsecase domain.BlogUsecase) *BlogHandler {
	return &BlogHandler{
		BlogUsecase: blogUsecase,
	}
}

func (h *BlogHandler) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/", h.GetBlogs)
	return r
}

// @tags blogs
// @summary List blogs.
// @description List blogs.
// @security BearerJWT
// @id list-blogs
// @produce json
// @success 200 {object} handler.BlogResponseList
// @router /blogs [get]
func (h *BlogHandler) GetBlogs(w http.ResponseWriter, r *http.Request) {

	blogs, total, err := h.BlogUsecase.GetBlogs()
	if err != nil {
		render.Render(w, r, handler.ErrInvalidRequest(err))
		return
	}

	blogResponseList := BlogResponseList{
		Total: *total,
		Blogs: make([]BlogResponse, 0, len(blogs)),
	}

	for _, b := range blogs {
		blogResponseList.Blogs = append(blogResponseList.Blogs, *BlogToBlogResponse(&b))
	}

	render.Status(r, http.StatusOK)
	render.Render(w, r, &blogResponseList)
}
