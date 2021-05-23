-- drop database banco_questoes;
CREATE SCHEMA IF NOT EXISTS `banco_questoes` DEFAULT CHARACTER SET utf8 ;
USE `banco_questoes` ;

CREATE TABLE IF NOT EXISTS `banco_questoes`.`categoria` (
  id_categoria INT PRIMARY KEY NOT NULL,
  nome_categoria VARCHAR(45) NOT NULL);


CREATE TABLE IF NOT EXISTS `banco_questoes`.`questao` (
  id_questao INT  PRIMARY KEY NOT NULL,
  nome_questao VARCHAR(45) NOT NULL,
  id_categoria INT NOT NULL);
ALTER TABLE `questao` ADD FOREIGN KEY (`id_categoria`) REFERENCES `categoria`(`id_categoria`);


CREATE TABLE IF NOT EXISTS `banco_questoes`.`alternativa` (
  `id_alternativa` INT PRIMARY KEY NOT NULL,
  `desc_alternativa` VARCHAR(45) NOT NULL,
  `pontos` INT NOT NULL,
  `id_questao` INT NOT NULL);
ALTER TABLE `alternativa` ADD FOREIGN KEY (`id_questao`) REFERENCES `questao`(`id_questao`);

insert into categoria(id_categoria, nome_categoria) values(1, "SWOT");
insert into categoria(id_categoria, nome_categoria) values(2, "Mercado Alvo");
insert into categoria(id_categoria, nome_categoria) values(3, "Localização");
insert into categoria(id_categoria, nome_categoria) values(4, "Concorrência");

insert into questao(id_questao, nome_questao, id_categoria) values (1, "Questão de SWOT", 1);
insert into questao(id_questao, nome_questao, id_categoria) values (2, "Questão de Mercado Alvo", 2);
insert into questao(id_questao, nome_questao, id_categoria) values (3, "Questão de Localização", 3);
insert into questao(id_questao, nome_questao, id_categoria) values (4, "Questão de Concorrência", 4);

insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (1, "SOWT 1", 0, 1);
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (2, "SOWT 2", 1, 1);
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (3, "SOWT 2", 2, 1);
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (4, "SOWT 2", 3, 1);

insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (5, "Mercado Alvo 1", 0, 2);
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (6, "Mercado Alvo 2", 1, 2);
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (7, "Mercado Alvo 3", 2, 2);
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (8, "Mercado Alvo 4", 3, 2);
    
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (9, "Localização 1", 0, 3);
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (10, "Localização 2", 1, 3);
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (11, "Localização 3", 2, 3);
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (12, "Localização 4", 3, 3);    

insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (13, "Concorrência 1", 0, 4);
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (14, "Concorrência 2", 1, 4);
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (15, "Concorrência 3", 2, 4);
insert into alternativa(id_alternativa, desc_alternativa, pontos, id_questao) 
	values (16, "Concorrência 4", 3, 4); 



select * from alternativa a inner join questao q on q.id_questao = a.id_questao;
