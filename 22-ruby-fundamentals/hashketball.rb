require 'pry'


def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        {player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        {player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        {player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        {player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        {player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
        {player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        {player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        {player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
  # puts "in the game_hash"
end


def num_points_scored(player_name)
  # get a list of all the players
  # players = get_players
  # iterate through players and find the player whose name matches the 'player_name' parameter
  # return the value of the 'points' key from the matched player hash
  # players.each do |player|
  #   if player[:player_name] == player_name
  #     return player[:points]
  #   end
  # end
  # found = players.find do |player|
  #   player[:player_name] == player_name
  # end
  # # binding.pry
  # found[:points]

  # refactor use of find above into helper method
  find_player(player_name)[:points]
end

def shoe_size(player_name)
  find_player(player_name)[:shoe]
end

def team_colors(team_name)
  # binding.pry
  # game_hash.each do |loc, team_data|
  #   if team_data[:team_name] == team_name
  #     return team_data[:colors]
  #   end
  # end
  game_hash.values.each do |team_data|
    # binding.pry
    if team_data[:team_name] == team_name
          return team_data[:colors]
        end
  end
end

def team_names
  get_teams.map {|team_data| team_data[:team_name]}
end

def player_numbers(team_name)
  players = find_team(team_name)[:players]
  jerseys = players.map{|player| player[:number]}
  return jerseys
  # can refactor to:
  # find_team(team_name)[:players].map{|player| player[:number]}
  # binding.pry
end

# ********************
# HELPERS
# ********************

def get_players
  game_hash[:home][:players] += game_hash[:away][:players]
end

def find_player(player_name)
  get_players.find { |player| player[:player_name] == player_name}
end

def get_teams
  game_hash.values
end

def find_team(team_name)
  get_teams.find {|team| team[:team_name] == team_name}
end


# binding.pry

# EXERCISES on ITERATORS
# What do the following return?

arr = (1..10).to_a

res = arr.map do |num|
  num.even?
end
# res = arr.collect do |num|
#   puts num.odd?
# end

odds = arr.select do |num|
  num.odd?
end

seven_arr = arr.select {|num| num == 7 }
seven = arr.find {|num| num == 17 }

puts seven.inspect