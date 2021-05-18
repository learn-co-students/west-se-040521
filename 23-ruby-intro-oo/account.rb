require 'pry'
# ===============
# Procedural Ruby
# ================

bank_account1 = {"user_id" => 3, "balance" => 100, "type" => "checking"}
bank_account2 = {"user_id": 4, "balance": 200, "type": "savings"}

def deposit(account, amount)
    # binding.pry
    account["balance"] += amount
end

deposit(bank_account1, 50)
# puts bank_account1["balance"]

# ===============
# Object-Oriented Ruby
# ===============

class BankAccount

    #---------------
    # class vars and methods
    #---------------

    @@all = []
    # @@deposits = 0
    
    def self.all # self outside of an instance method refers to the class
        @@all
    end

    def self.count
        @@all.count
    end

    def self.deposits
        total = 0
        @@all.each {|acct| total += acct.balance}
        total
    end

    def self.accounts
        @@all.map {|acct| acct.account_number}
    end

    def self.low_balance
        self.all.select {|acct| acct.balance < 500}
    end
    
    attr_accessor :balance, :type, :account_number
    attr_reader :user_id
    # attr_writer :account_number
    
    #---------------
    # Instance methods
    #---------------
    
    def initialize(user_id, balance, type, account_number)
        # binding.pry
        @user_id = user_id
        @balance = balance
        @type = type
        @account_number = account_number
        @@all << self # self in an instance method refers to that instance
    end

    def deposit(amount)
        self.balance += amount
    end

    def withdraw(amount)
        @balance -= amount
    end

    # the reader and writer methods below are now created by the attr_accessor macros above
    # def balance  # reader (getter) method
    #     @balance
    # end

    # def balance=(amount) # writer (setter) method
    #     @balance += amount
    # end

    # this is a custom method which overwrites the built-in Object.to_s method. (replacing a built-in method is called 'monkeypatching'; use with CAUTION)

    def to_s
        puts "User: #{@user_id}; Balance: #{@balance}"
    end

end


# the code below implements our BankAccount class by creating new instances and calling methods on them

ba1 = BankAccount.new(1, 1000, 'checking', 987876)
ba2 = BankAccount.new(2, 245, 'savings', 987877)
puts ba1
puts ba1.balance
# ba1.balance = 
ba1.deposit(75)
puts ba1.balance
puts ba1.user_id
puts ba1.account_number = 8764
# puts ba1.account_number
ba1.withdraw(20)
puts ba1.balance
puts BankAccount.all.inspect
puts BankAccount.count
puts BankAccount.deposits
puts BankAccount.accounts.inspect
puts BankAccount.low_balance.inspect

# this method should probably be incorporated as class methods in our BankAccount class. What changes would have to be made?

# def low_balance
#     BankAccount.all.select {|acct| acct.balance < 500}
# end

# Write an implementation of a bank account that meets the following requirements:

# * can print the balance of the account
# * can deposit money into the account
# * can withdraw money from the account
# * keeps track of the account number
# * keeps track of the customer id of the account

# BONUS: write a class method .find_account which takes in a user_id and returns the first account found with the same user_id


# we could run all of the above implentation code in Pry as well (to exit Pry, just type 'exit')
binding.pry

