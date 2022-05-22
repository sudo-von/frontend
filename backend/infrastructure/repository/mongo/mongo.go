package mongo

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func NewMongoDatabase(dbURL, dbName, dbUser, dbPassword, dbPort string) (*mongo.Database, error) {

	uri := fmt.Sprintf("mongodb://%s:%s@%s:%s/%s?authSource=admin", dbUser, dbPassword, dbURL, dbPort, dbName)

	client, err := mongo.NewClient(options.Client().ApplyURI(uri))
	if err != nil {
		return nil, err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)

	defer cancel()

	err = client.Connect(ctx)
	if err != nil {
		return nil, err
	}

	defer client.Disconnect(ctx)

	return client.Database(dbName), nil
}
