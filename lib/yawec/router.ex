defmodule Yawec.Router do
  use Phoenix.Router
  use Phoenix.Router.Socket, mount: "/ws"

  plug Plug.Static, at: "/static", from: :yawec
  get "/", Yawec.Controllers.Pages, :index, as: :page

  channel "chat", Yawec.Channels.Chat
end
