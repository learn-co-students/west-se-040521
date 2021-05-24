class Boxer < ActiveRecord::Base

    def trainer
        Trainer.all.find {|trainer| trainer.id == self.trainer_id}
    end
    
end