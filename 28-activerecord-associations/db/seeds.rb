Appointment.destroy_all
Patient.destroy_all
Doctor.destroy_all

# marge = Patient.new(name: "Marge Simpson", condition: "big hair")
conditions = ["backache", "headache", "jaundice", "heartache", "nausea"]
5.times do
    Patient.create(name: Faker::FunnyName.name, condition: conditions.sample)
end

# ADD CODE for Departments here


5.times do 
    Doctor.create(name: Faker::Name.name)
end

5.times do
    Appointment.create(patient: Patient.all.sample, doctor: Doctor.all.sample, time: Faker::Date.between(from: Date.tomorrow, to: 1.year.from_now))
end
