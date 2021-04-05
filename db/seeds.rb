# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.destroy_all
Book.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: 'admin1234')
@test = User.create!(username: 'test', email: 'test@email.com', password: 'test1234')


puts "#{User.count} users created"

@book1 = Book.create!(title: 'The Handmaid\'s Tale', author: 'Margaret Atwood', summary: 'In Margaret Atwood\’s dystopian future, environmental disasters and declining birthrates have led to a Second American Civil War. The result is the rise of the Republic of Gilead, a totalitarian regime that enforces rigid social roles and enslaves the few remaining fertile women.', image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578028274l/38447._SY475_.jpg', user: @admin)

@book2 = Book.create!(title: 'Killers of the Flower Moon: The Osage Murders and the Birth of the FBI', author: 'David Grann', summary: 'In the 1920s, the richest people per capita in the world were members of the Osage Nation in Oklahoma after oil was discovered beneath their land. Then, one by one, they began to be killed off. As the death toll surpassed more than twenty-four Osage, the newly created F.B.I. took up the case, and the young director, J. Edgar Hoover, turned to a former Texas Ranger named Tom White to try to unravel the mystery. White put together an undercover team, including a Native American agent who infiltrated the region, and together with the Osage began to expose one of the most sinister conspiracies in American history.', image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470699853l/29496076.jpg', user: @admin)

@book3 = Book.create!(title: 'Bad Feminist', author: 'Roxane Gay', summary: 'In these funny and insightful essays, Roxane Gay takes us through the journey of her evolution as a woman of color while also taking readers on a ride through culture of the last few years and commenting on the state of feminism today. The portrait that emerges is not only one of an incredibly insightful woman continually growing to understand herself and our society, but also one of our culture.', image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421292744l/18813642.jpg', user: @test)

@book4 = Book.create!(title: 'Know My Name', author: 'Chanel Miller', summary: 'She was known to the world as Emily Doe when she stunned millions with a letter. Brock Turner had been sentenced to just six months in county jail after he was found sexually assaulting her on Stanford\’s campus. Her victim impact statement was posted on BuzzFeed, where it was viewed by eleven million people within four days, it was translated globally and read on the floor of Congress; it inspired changes in California law and the recall of the judge in the case. Thousands wrote to say that she had given them the courage to share their own experiences of assault for the first time. Now she reclaims her identity to tell her story of trauma, transcendence, and the power of words.', image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567612158l/50196744._SX318_SY475_.jpg', user: @test)

puts "#{Book.count} books created"


Review.create!(content: 'Interesting and eye opening. A scary true story of greed and racism in the development of the American West. This is one of those hard to read and accept truths of American history. If you enjoy history and/or true crime I think this is worth giving a go.', user: @admin, book: @book2)

Review.create!(content: 'An interesting book of essays that are worth reading. I liked how the author explored a range of different subjects with different levels of seriousness and humour, using both popular culture and current serious events.', user: @admin, book: @book3)

Review.create!(content: 'I\’ve been moved by books in the past, many times, but I\’ve never before read a book that has emotionally drained me to such a degree. This is frightening and powerful. And sometimes it only takes a single paragraph to make you realise how much so', user: @test, book: @book1)

Review.create!(content: 'This is the best memoir I\'ve read so far. Miller thoroughly combs through the exhausting process of reporting rape and reliving trauma through frustratingly slow and dehumanizing trials. I appreciate that she makes connections to how victims of police brutality are treated and similarly blamed and put through the wringer of the justice system. I am amazed by how she is able to articulate all of her thoughts, memories, and gut-wrenching emotions in such a beautiful and metaphorical way.', user: @test, book: @book4)

puts "#{Review.count} reviews created"
