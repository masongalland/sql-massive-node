drop table if exists Products;

create table Products (
    ID serial primary key,
    Name text,
    Description text,
    Price integer,
    Imageurl text
    );

insert into Products 
	(name, description, price, imageurl) values ('shirt', 'blue shirt', 25, 'http://...');