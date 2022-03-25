class CreateQuizResults < ActiveRecord::Migration[6.1]
  def change
    create_table :quiz_results do |t|
      t.integer :result
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
