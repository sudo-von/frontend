package usecase

import (
	"fmt"
	"portfolio/backend/domain"
)

type UserUsecase struct {
	userRepository domain.UserRepository
}

func NewUserUsecase(userRepository domain.UserRepository) *UserUsecase {
	return &UserUsecase{
		userRepository: userRepository,
	}
}

func (u *UserUsecase) GetUserByID(userID string) (*domain.User, error) {
	user, err := u.userRepository.GetUserByID(userID)
	if err != nil {
		return nil, fmt.Errorf("GetUserByID: %w", err)
	}
	return user, nil
}
