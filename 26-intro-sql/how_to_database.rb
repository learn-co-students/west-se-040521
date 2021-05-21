require 'sqlite3'
require 'pry'


db = SQLite3::Database.new('chinook.db')

artists = db.execute("SELECT * FROM artists;") 

binding.pry
