class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender
  belongs_to :species
end
