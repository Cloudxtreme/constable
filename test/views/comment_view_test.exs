defmodule Constable.CommentViewTest do
  use Constable.ViewCase, async: true

  test "returns json with comment id and body" do
    comment = create(:comment)

    rendered_comment = CommentView.render("show.json", %{comment: comment})

    assert rendered_comment == %{
      id: comment.id,
      body: comment.body,
      user: comment.user,
      announcement_id: comment.announcement_id,
      inserted_at: comment.inserted_at
    }
  end
end
