json.array!(@things_to_dos) do |things_to_do|
  json.extract! things_to_do, :id, :thing, :description, :done
  json.url things_to_do_url(things_to_do, format: :json)
end
