# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.
puts "1:"

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def only_odds_least_to_greatest arr
    filtered_arr = arr.select {|item| item.is_a?(Integer) && item % 2 == 1}
    p filtered_arr.sort
end

only_odds_least_to_greatest fullArr1
only_odds_least_to_greatest fullArr2
puts "\n"

# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.
puts "2:"

class Bike

    def initialize (model, frame_size)
        @model = model
        @wheels = 2
        @frame_size = frame_size
        @speed = 0
        @bell = "RING RING"
    end
    
    # getter for speed
    def speed 
        @speed
    end

    # displays current speed as string
    def current_speed
        puts "#{@speed} mph"
    end

    # increases speed by given num
    def speed_up num
        @speed += num
    end

    # decreases speed by given num, cant go below 0
    def slow_down num
        @speed -= num
        if @speed < 0
            @speed = 0
        end
    end

    # Descriptive info on bike
    def get_info
        puts "The #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame"
    end

    # prints "RING RING" to the terminal
    def ring_bell 
        puts @bell
    end
end

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'

new_bike = Bike.new("Trek", "168cm")
new_bike.get_info
puts "\n"

# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.
puts "3:"

new_bike.ring_bell

# Expected output example: my_bike.ring_bell => 'Beep beep!'
puts "\n"

# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.
puts "4:"

new_bike.current_speed

# Expected output example: my_bike.speed => 0
puts "\n"

# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.
puts "5:"

new_bike.speed_up 10
new_bike.current_speed

new_bike.slow_down 5
new_bike.current_speed

new_bike.slow_down 10
new_bike.current_speed

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

