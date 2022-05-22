package config

import "os"

var (
	API_PORT = os.Getenv("API_PORT")
)
