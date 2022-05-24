package mongo

import (
	"context"
	"portfolio/backend/domain"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type blogModel struct {
	ID             string    `bson:"_id"`
	Title          string    `bson:"title"`
	Description    string    `bson:"description"`
	MainPictureURL string    `bson:"main_picture_url"`
	Category       string    `bson:"category"`
	Views          int64     `bson:"views"`
	CreationDate   time.Time `bson:"creation_date"`
}

func blogModelToDomain(b blogModel) domain.Blog {
	return domain.Blog{
		ID:             b.ID,
		Title:          b.Title,
		Description:    b.Description,
		MainPictureURL: b.MainPictureURL,
		Category:       b.Category,
		Views:          b.Views,
		CreationDate:   b.CreationDate,
	}
}

type mongoBlogRepository struct {
	collection *mongo.Collection
}

func NewMongoBlogRepository(database *mongo.Database) domain.BlogRepository {
	return &mongoBlogRepository{
		collection: database.Collection("blogs"),
	}
}

func (m *mongoBlogRepository) GetBlogs() ([]domain.Blog, *int64, error) {

	cursor, err := m.collection.Find(context.TODO(), bson.D{})
	if err != nil {
		return nil, nil, err
	}

	var blogModels []blogModel
	if err = cursor.All(context.TODO(), &blogModels); err != nil {
		return nil, nil, err
	}

	total, err := m.collection.CountDocuments(context.TODO(), bson.D{})
	if err != nil {
		return nil, nil, err
	}

	blogs := make([]domain.Blog, 0, len(blogModels))
	for _, b := range blogModels {
		blogs = append(blogs, blogModelToDomain(b))
	}

	return blogs, &total, err
}
