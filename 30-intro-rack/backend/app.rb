class App
    def call(env)
        # puts env
        resp = Rack::Response.new
        req = Rack::Request.new(env)
        headers = {
            "Content-Type" => "application/json"
        }
        puts req.path
        if req.path.match(/hello/)
            return [200, headers, [{message: "hello world!"}.to_json]]
        elsif req.path.match(/paintings/)
            return [200, headers, [{paintings: [{id: 1, title: "my great painting"}, {id: 2, title: "my awesome painting"}]}.to_json]]
        else
            resp.write "Path not found"
        end
        resp.finish
    end
end