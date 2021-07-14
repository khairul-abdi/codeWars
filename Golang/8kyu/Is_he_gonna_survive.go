package main

import "fmt"

func Hero(bullets, dragons int) bool {
	if bullets/2 >= dragons {
		return true
	} else {
		return false
	}
}

func main() {
	fmt.Println(Hero(6, 3))
	fmt.Println(Hero(7, 5))
}
