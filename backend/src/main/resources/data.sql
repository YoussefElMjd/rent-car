INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Class G Mansory',
        400,
        500,
        10000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Class G Mansory'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/class_g_mansory/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Class G Mansory'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/class_g_mansory/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Class G Mansory'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/class_g_mansory/2.jpg'
    );
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Class S Mansory',
        400,
        500,
        10000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Class S Mansory'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/class_s_mansory/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Class S Mansory'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/class_s_mansory/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Class S Mansory'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/class_s_mansory/2.jpg'
    );
-- Huracan 2020
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Huracan 2020',
        400,
        700,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Huracan 2020'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/huracan_2020/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Huracan 2020'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/huracan_2020/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Huracan 2020'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/huracan_2020/2.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Huracan 2020'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/huracan_2020/3.jpg'
    );
-- Huracan Evo Spyder 2023
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Huracan Evo Spyder 2023',
        450,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Huracan Evo Spyder 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/huracan_evo_spyder_2023/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Huracan Evo Spyder 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/huracan_evo_spyder_2023/1.jpg'
    );
-- BMW X6 Competition 2022
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'BMW X6 Competition 2022',
        350,
        350,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'BMW X6 Competition 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/bmw_x6_competition_2022/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'BMW X6 Competition 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/bmw_x6_competition_2022/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'BMW X6 Competition 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/bmw_x6_competition_2022/2.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'BMW X6 Competition 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/bmw_x6_competition_2022/3.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'BMW X6 Competition 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/bmw_x6_competition_2022/4.jpg'
    );
-- Bentley Continental GT 2022
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Bentley Continental GT 2022',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Bentley Continental GT 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/bentley_continental_gt_2022/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Bentley Continental GT 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/bentley_continental_gt_2022/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Bentley Continental GT 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/bentley_continental_gt_2022/2.jpg'
    );
-- BMW X4 MCompetition
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'BMW X4 MCompetition',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'BMW X4 MCompetition'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/bmw_x4_mcompetition/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'BMW X4 MCompetition'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/bmw_x4_mcompetition/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'BMW X4 MCompetition'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/bmw_x4_mcompetition/2.jpg'
    );
-- Audi RSQ3
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Audi RSQ3',
        300,
        550,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Audi RSQ3'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/audi_rsq3/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Audi RSQ3'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/audi_rsq3/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Audi RSQ3'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/audi_rsq3/2.jpg'
    );
-- Class G63
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Class G63',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Class G63'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/class_g63/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Class G63'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/class_g63/1.jpg'
    );
-- GT63s
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES ('GT63s', 300, 650, 15000);
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'GT63s'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/gt63s/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'GT63s'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/gt63s/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'GT63s'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/gt63s/2.jpg'
    );
-- SVR Range Rover
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'SVR Range Rover',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'SVR Range Rover'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/svr_range_rover/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'SVR Range Rover'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/svr_range_rover/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'SVR Range Rover'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/svr_range_rover/2.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'SVR Range Rover'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/svr_range_rover/3.jpg'
    );
-- Urus Mansory 2023
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Urus Mansory 2023',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Urus Mansory 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/urus_mansory_2023/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Urus Mansory 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/urus_mansory_2023/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Urus Mansory 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/urus_mansory_2023/2.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Urus Mansory 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/urus_mansory_2023/3.jpg'
    );
-- Cayenne GTS 2022
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Cayenne GTS 2022',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Cayenne GTS 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/cayenne_gts_2022/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Cayenne GTS 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/cayenne_gts_2022/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Cayenne GTS 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/cayenne_gts_2022/2.jpg'
    );
-- Porshe GT3 2023
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Porshe GT3 2023',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Porshe GT3 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/porshe_gt3_2023/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Porshe GT3 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/porshe_gt3_2023/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Porshe GT3 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/porshe_gt3_2023/2.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Porshe GT3 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/porshe_gt3_2023/3.jpg'
    );
-- Urus Rouge 2023
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Urus Rouge 2023',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Urus Rouge 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/urus_rouge_2023/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Urus Rouge 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/urus_rouge_2023/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Urus Rouge 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/urus_rouge_2023/2.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Urus Rouge 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/urus_rouge_2023/3.jpg'
    );
-- Urus Noir 2023
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Urus Noir 2023',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Urus Noir 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/urus_noir_2023/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Urus Noir 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/urus_noir_2023/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Urus Noir 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/urus_noir_2023/2.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Urus Noir 2023'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/urus_noir_2023/3.jpg'
    );
-- RS6 Mansory
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'RS6 Mansory',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'RS6 Mansory'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/rs6_mansory/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'RS6 Mansory'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/rs6_mansory/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'RS6 Mansory'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/rs6_mansory/2.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'RS6 Mansory'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/rs6_mansory/3.jpg'
    );
-- CLS Brabus
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'CLS Brabus',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'CLS Brabus'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/cls_brabus/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'CLS Brabus'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/cls_brabus/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'CLS Brabus'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/cls_brabus/2.jpg'
    );
-- Audi RSQ8
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Audi RSQ8',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Audi RSQ8'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/audi_rsq8/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Audi RSQ8'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/audi_rsq8/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Audi RSQ8'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/audi_rsq8/2.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Audi RSQ8'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/audi_rsq8/3.jpg'
    );
-- Porshe 911 Turbo
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Porshe 911 Turbo',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Porshe 911 Turbo'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/porshe_911_turbo/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Porshe 911 Turbo'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/porshe_911_turbo/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Porshe 911 Turbo'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/porshe_911_turbo/2.jpg'
    );
-- RS3 2022
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'RS3 2022',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'RS3 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/rs3_2022/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'RS3 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/rs3_2022/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'RS3 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/rs3_2022/2.jpg'
    );
-- RS3 Gris 2022
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'RS3 Gris 2022',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'RS3 Gris 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/rs3_gris_2022/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'RS3 Gris 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/rs3_gris_2022/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'RS3 Gris 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/rs3_gris_2022/2.jpg'
    );
-- Porche Macan 2021
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Porche Macan 2021',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Porche Macan 2021'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/porche_macan_2021/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Porche Macan 2021'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/porche_macan_2021/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Porche Macan 2021'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/porche_macan_2021/2.jpg'
    );
-- Range Rover Velar 2022
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Range Rover Velar 2022',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Range Rover Velar 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/range_rover_velar_2022/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Range Rover Velar 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/range_rover_velar_2022/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Range Rover Velar 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/range_rover_velar_2022/2.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Range Rover Velar 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/range_rover_velar_2022/3.jpg'
    );
-- Class C Cab 2022
INSERT INTO car (
        car_name,
        car_power,
        rent_price,
        car_deposit
    )
VALUES (
        'Class C Cab 2022',
        300,
        650,
        15000
    );
INSERT INTO car_images (car_id, image_urls)
VALUES (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Class C Cab 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/class_c_cab_2022/0.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Class C Cab 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/class_c_cab_2022/1.jpg'
    ),
    (
        (
            SELECT id
            FROM car
            WHERE car_name = 'Class C Cab 2022'
        ),
        'https://rentcar-storage.s3.eu-west-2.amazonaws.com/images/class_c_cab_2022/2.jpg'
    );