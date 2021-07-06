package main

import (
	"fmt"
	"math"
)

func SquareSum(numbers []int) int {
	var result int
	for _, number := range numbers {
		result += int(math.Pow(float64(number), 2))
	}
	return result
}

func main() {
	fmt.Println(SquareSum([]int{1, 2}))
	fmt.Println(SquareSum([]int{0, 3, 4, 5}))
	fmt.Println(SquareSum([]int{0, 3, 4, 5}))
}
