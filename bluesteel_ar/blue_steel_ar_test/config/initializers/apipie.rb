Apipie.configure do |config|
  config.app_name                = "BlueSteelArTest"
  config.api_base_url            = "/api"
  config.doc_base_url            = "/apipie"
  # where is your API defined?
  config.api_controllers_matcher = "#{Rails.root}/app/controllers/**/*.rb"
  # to get examples
  config.show_all_examples = true


end
