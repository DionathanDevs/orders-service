CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_access BOOLEAN NOT NULL DEFAULT TRUE,
    cpf CHAR(11) UNIQUE NOT NULL,
    active BOOLEAN NOT NULL DEFAULT false,
    verify_code VARCHAR(6),
    verify_code_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    organization int,
    FOREIGN KEY (organization)
    REFERENCES organizations (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE 
);

CREATE TABLE organizations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tax_identifier varchar(50),
    corporate_name VARCHAR(50) NOT NULL,
    business_name VARCHAR(50) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT true,

);

CREATE TABLE cars (
    id int AUTO_INCREMENT primary KEY,
    model VARCHAR(150),
    brand VARCHAR(60)
);
CREATE TABLE clients (
    id int AUTO_INCREMENT primary key,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    organization int,
    FOREIGN KEY (organization)
    REFERENCES organizations (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE 
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    requesting_user INT,
    observation TEXT,
    status INT, -- Esta será uma Foreign Key para a tabela order_status do seu desenho
    
    coin VARCHAR(10),
    car_client_id INT, -- Acredito que seja o vínculo do carro com o cliente
    
    -- Dados de cancelamento
    cancellation_date TIMESTAMP NULL DEFAULT NULL,
    cancellation_user INT,
    cancellation_reason TEXT,
    
    responsible_group INT,
    
    -- Auditoria e Datas no seu padrão exato
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    scheduling TIMESTAMP NULL DEFAULT NULL,
    
    -- Localização
    head_office INT,
    branch INT,
    
    -- Relacionamento com a Organização
    organization INT,
    
    -- Amarração das Chaves Estrangeiras
    FOREIGN KEY (organization) 
        REFERENCES organizations (id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
        
    FOREIGN KEY (requesting_user) 
        REFERENCES users (id) 
        ON DELETE SET NULL 
        ON UPDATE CASCADE,
        
    FOREIGN KEY (cancellation_user) 
        REFERENCES users (id) 
        ON DELETE SET NULL 
        ON UPDATE CASCADE
);