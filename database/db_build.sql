BEGIN;

DROP TABLE IF EXISTS kitty cascade;

CREATE TABLE kitty (
  id SERIAL PRIMARY KEY,
  transaction_date DEFAULT GETDATE(),
  name VARCHAR(200) NOT NULL,
  transaction_value INT NOT NULL,
);

INSERT INTO kitty (name, transaction_value)
VALUES
('Mario', 25), ('Edgar', 25), ('Eoin', -50);

COMMIT;
