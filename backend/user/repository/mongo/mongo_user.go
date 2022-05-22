package mongo

import (
	"context"
	"portfolio/backend/domain"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type userModel struct {
	ID                string `bson:"_id"`
	Username          string `bson:"username"`
	Name              string `bson:"name"`
	Email             string `bson:"email"`
	ProfilePictureURL string `bson:"profile_picture_url"`
}

func userModelToDomain(u userModel) domain.User {
	return domain.User{
		ID:                u.ID,
		Username:          u.Username,
		Name:              u.Name,
		Email:             u.Email,
		ProfilePictureURL: u.ProfilePictureURL,
	}
}

type mongoUserRepository struct {
	collection *mongo.Collection
}

func NewMongoUserRepository(database *mongo.Database) domain.UserRepository {
	return &mongoUserRepository{
		collection: database.Collection("users"),
	}
}

func (m *mongoUserRepository) GetUserByID(userID string) (*domain.User, error) {

	var userModel userModel
	err := m.collection.FindOne(context.TODO(), bson.D{}).Decode(&userModel)
	if err != nil {
		return nil, nil
	}

	user := userModelToDomain(userModel)
	return &user, nil
}
