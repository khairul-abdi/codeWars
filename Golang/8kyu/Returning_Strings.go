package main

import "fmt"

func Greet(name string) string {
	return fmt.Sprintf("Hello, %s how are you doing today?", name)
}

func main() {
	Greet("Ryan") //Hello, Ryan how are you doing today?
}
