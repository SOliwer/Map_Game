drop database if exists trolle02;
create database trolle02;

use trolle02;

create table Benutzer(
	userid int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    email varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    passwort varchar(255) COLLATE utf8_unicode_ci NOT NULL
    );
    
    
create table Haus(
	hausnr int primary key,
    hausname varchar(90),
    haustroll varchar(20)
    );
    
create table Fragenblock(
	hausnr int,
    fbnr int
    );
    
create table Frage(
	fid int primary key,
    hausnr int,
    fbnr int,
    fragentext varchar(255) not null
    );
    
create table Richtige_Antwort(
	fid int,
    ranr int,
    ratext varchar(255) not null
    );
    
create table Falsche_Antwort(
	fid int,
    fanr int,
    fatext varchar(255) not null
    );
    
create table Hausfortschritt(  -- "besiegt" in ER-Dia alt --
	hausnr int,
    userid int unsigned,
    sieg varchar(50), -- Platzhalter für Trophies --
    punktestand int, -- Platzhalter für Hausfortschritt in Punkten oder % --
    abgeschlossen boolean not null
    );
    
create table FBFortschritt(    -- "erledigt" in ER-Dia alt --
	hausnr int,
    fbnr int,
    userid int unsigned,
    fortschritt decimal (5,2),
    aktuelleZeit time,
    bestzeit time
    );
    
    
    
-- Primary Keys ----------------------------------------------------------------------------------------------------------------------

alter table Fragenblock add constraint pk_fragenblock primary key (hausnr, fbnr);
alter table Hausfortschritt add constraint pk_hausfortschritt primary key (hausnr, userid);
alter table FBFortschritt add constraint pk_fbfortschritt primary key (hausnr, fbnr, userid);
alter table Richtige_Antwort add constraint pk_richtige_antwort primary key (fid, ranr);
alter table Falsche_Antwort add constraint pk_falsche_antwort primary key (fid, fanr);

-- Foreign Keys ----------------------------------------------------------------------------------------------------------------------

alter table Fragenblock add constraint fk_fragenblock_haus foreign key (hausnr) references haus (hausnr);
alter table Frage add constraint fk_frage_fragenblock foreign key (hausnr, fbnr) references fragenblock (hausnr, fbnr);
alter table Hausfortschritt add constraint fk_hausfortschritt_haus foreign key (hausnr) references haus (hausnr);
alter table Hausfortschritt add constraint fk_hausfortschritt_benutzer foreign key (userid) references benutzer (userid);
alter table FBFortschritt add constraint fk_fbfortschritt_fragenblock foreign key (hausnr, fbnr) references fragenblock (hausnr, fbnr);
alter table FBFortschritt add constraint fk_fbfortschritt_benutzer foreign key (userid) references benutzer (userid);
alter table Richtige_Antwort add constraint fk_richtige_antwort_frage foreign key (fid) references frage (fid);
alter table Falsche_Antwort add constraint fk_falsche_antwort_frage foreign key (fid) references frage (fid);





