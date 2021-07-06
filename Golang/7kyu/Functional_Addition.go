package main

import "fmt"

func Add(i int) func(int) int {
	return func(j int) int {
		return i + j
	}
}

func main() {
	fmt.Println(Add(1)(3))
}
