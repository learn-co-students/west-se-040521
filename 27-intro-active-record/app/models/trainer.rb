class Trainer < ActiveRecord::Base

    def boxers
        # Boxer.all.select{|boxer| boxer.trainer_id == self.id}
        Boxer.where(trainer_id: self.id)
    end
end