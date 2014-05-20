defmodule Yawec.Router do
  use Phoenix.Router

  plug Plug.Static, at: "/static", from: :yawec
  get "/", Yawec.Controllers.Pages, :index, as: :page
end
