require "rack"
require "rack/cors"

require "json"
require_relative './app'

use Rack::Cors do
    allow do
        origins '*'
        resource '/*', header: :any, methods: :get
    end
end

run App.new