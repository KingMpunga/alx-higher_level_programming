import turtle

class Base:
    # ... (previous methods)

    @staticmethod
    def draw(list_rectangles, list_squares):
        turtle.speed(1)
        turtle.hideturtle()

        for rect in list_rectangles:
            turtle.penup()
            turtle.goto(rect.x, rect.y)
            turtle.pendown()
            turtle.forward(rect.width)
            turtle.left(90)
            turtle.forward(rect.height)
            turtle.left(90)
            turtle.forward(rect.width)
            turtle.left(90)
            turtle.forward(rect.height)
            turtle.left(90)

        for square in list_squares:
            turtle.penup()
            turtle.goto(square.x, square.y)
            turtle.pendown()
            turtle.forward(square.size)
            turtle.left(90)
            turtle.forward(square.size)
            turtle.left(90)
            turtle.forward(square.size)
            turtle.left(90)
            turtle.forward(square.size)
            turtle.left(90)

        turtle.exitonclick()

