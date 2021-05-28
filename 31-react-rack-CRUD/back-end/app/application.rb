require 'pry'
require 'json'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/toys/) && req.get?
      toys = Toy.all
      return [200, { 'Content-Type' => 'application/json' }, [ {toys: toys}.to_json ]]
    elsif req.path.match(/toys/) && req.patch?
      id = req.path.split("/toys/").last
      toy = Toy.find(id)
      data = JSON.parse req.body.read
      puts data
      toy.update(data)
      return [200, { 'Content-Type' => 'application/json' }, [ {toy: toy}.to_json ]]
      
    elsif req.path.match(/toys/) && req.post?
      data = JSON.parse req.body.read
      toy = Toy.create(data)
      return [200, { 'Content-Type' => 'application/json' }, [ {toy: toy}.to_json ]]

    elsif req.delete?
      id = req.path.split("/toys/").last
      Toy.find(id).delete
      return [200, { 'Content-Type' => 'application/json' }, [ {message: "Toy donated"}.to_json ]]
      
    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
