extends CharacterBody2D

@export var speed := 250.0

@onready var animated_sprite: AnimatedSprite2D = $AnimatedSprite2D

var last_direction := Vector2.DOWN


func _physics_process(_delta):

	var direction = Input.get_vector(
		"ui_left",
		"ui_right",
		"ui_up",
		"ui_down"
	)

	if direction != Vector2.ZERO:

		velocity = direction * speed

		last_direction = direction

		if abs(direction.x) > abs(direction.y):

			if direction.x > 0:
				animated_sprite.play("walk_right")
			else:
				animated_sprite.play("walk_left")

		else:

			if direction.y > 0:
				animated_sprite.play("walk_down")
			else:
				animated_sprite.play("walk_up")

	else:

		velocity = Vector2.ZERO

		if abs(last_direction.x) > abs(last_direction.y):

			if last_direction.x > 0:
				animated_sprite.animation = "idle_right"
			else:
				animated_sprite.animation = "idle_left"

		else:

			if last_direction.y > 0:
				animated_sprite.animation = "idle_down"
			else:
				animated_sprite.animation = "idle_up"

		animated_sprite.stop()
		animated_sprite.frame = 0

	move_and_slide()
