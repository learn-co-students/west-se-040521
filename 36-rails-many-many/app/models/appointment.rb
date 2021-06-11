class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient

  validate :in_future

  def in_future
    if time.present? && time < Date.today
      errors.add(:time, "must be after present")
    end
  end

end
