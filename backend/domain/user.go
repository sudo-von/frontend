package domain

type User struct {
	ID                string
	Username          string
	Name              string
	Email             string
	ProfilePictureURL string
}

type UserUsecase interface {
	GetUserByID(id string) (*User, error)
}

type UserRepository interface {
	GetUserByID(id string) (*User, error)
}
