-- User
insert into User values (1, 'David S','david123@gmail.com','Welcome@1', 'Estancia drive', 'San Jose', '95134');
insert into User values (2, 'Julia Gerg','julia123@gmail.com','Welcome@2', 'Skyfarm drive', 'San Mateo', '94010');
insert into User values (3, 'Kathy Hong','kathy123@gmail.com','Welcome@3', 'Sierra Street', 'Redwood City', '94061');
insert into User values (4, 'Richard Jose','richard123@gmail.com','Welcome@4', 'Byron Street', 'Palo Alto', '94301');
insert into User values (5, 'Ashly Smith','ashly123@gmail.com','Welcome@5', 'Monroe Street', 'Santa Clara', '95050');

-- Review
insert into Review values (1, 2, 5.0, 'They are very organized, accomodated my special requests.');
insert into Review values (2, 5, 4.5, 'I took their service for my son birthday party. Eeally like their theme based decoration and catering service.');

-- Occasion
insert into Occasion values (101, 'Baby Shower');
insert into Occasion values (102, 'Birthday');
insert into Occasion values (103, 'House Warming');
insert into Occasion values (104, 'Wedding');
insert into Occasion values (105, 'Party With a Theme');

-- Decoration
insert into Decoration values (1, 101, 'baby boy theme');
insert into Decoration values (2, 101, 'baby girl theme');
insert into Decoration values (3, 101, 'twins');

insert into Decoration values (4, 102, 'Animal theme');
insert into Decoration values (5, 102, 'Super hero theme');
insert into Decoration values (6, 102, 'Princess theme');
insert into Decoration values (7, 102, 'Teen Birthday');

insert into Decoration values (8, 103, 'General theme');
insert into Decoration values (9, 103, 'With fun events');

insert into Decoration values (10, 104, 'Beach Wedding');
insert into Decoration values (11, 104, 'Modern Wedding');
insert into Decoration values (12, 104, 'Romantic Wedding');
insert into Decoration values (13, 104, 'Traditional Wedding');

insert into Decoration values (14, 105, 'Harry potter Party');
insert into Decoration values (15, 105, 'Jungle Party');
insert into Decoration values (16, 105, '90s Retro Party');
insert into Decoration values (17, 105, 'Sweet snow cone Party');

-- Cuisine
insert into Cuisine values (1, 101, 'Appetizer & Snacks');
insert into Cuisine values (2, 101, 'Main Course');

insert into Cuisine values (3, 102, 'Snacks items');
insert into Cuisine values (4, 102, 'Dinner menu');

insert into Cuisine values (5, 103, 'Indian: full course menu');
insert into Cuisine values (6, 103, 'Mexican: full course menu');

insert into Cuisine values (7, 104, 'Italian Menu');
insert into Cuisine values (8, 104, 'Indian Menu');
insert into Cuisine values (9, 104, 'Thai Menu');
insert into Cuisine values (10, 104, 'American traditional Menu');

insert into Cuisine values (11, 105, 'Snacks items');
insert into Cuisine values (12, 105, 'Appetizer & Snacks');
insert into Cuisine values (13, 105, 'Main Course');

-- Other
insert into Other values (1, 101, 'Photography');
insert into Other values (2, 102, 'Photography');
insert into Other values (3, 103, 'Photography');
insert into Other values (4, 104, 'Photography');
insert into Other values (5, 105, 'Photography');
insert into Other values (6, 101, 'Videography');
insert into Other values (7, 102, 'Videography');
insert into Other values (8, 103, 'Videography');
insert into Other values (9, 104, 'Videography');
insert into Other values (10, 105, 'Videography');
insert into Other values (11, 101, 'Music');
insert into Other values (12, 102, 'Music');
insert into Other values (13, 103, 'Music');
insert into Other values (14, 104, 'Music');
insert into Other values (15, 105, 'Music');

-- Booking_History
insert into Booking_History values (1, 2, 104, 100, 'Vista del Mar', 'San Francisco' , '2021-08-12', 3000);
insert into Booking_History values (2, 5, 102, 50, null, 'Santa Clara' , '2022-03-20', 600);