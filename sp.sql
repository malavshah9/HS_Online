DELIMITER //
 
CREATE PROCEDURE TakeLastDraw()
BEGIN
    DECLARE varYantraId text;
    DECLARE varDrawDate date;
    DECLARE varDrawTime time;
    DECLARE varDrawType varchar(255);
    SELECT YantraId,DrawDate,DrawTime,DrawType INTO varYantraId,varDrawDate,varDrawTime,varDrawType  FROM draw ORDER BY DrawId DESC LIMIT 1;
    CALL InsertToWinning(varYantraId,varDrawDate,varDrawTime,varDrawType);

END //
 
DELIMITER ;

DELIMITER //
 
CREATE PROCEDURE InsertToWinning(IN varYantraId text,
    IN varDrawDate date,
    IN varDrawTime time,
    IN varDrawType varchar(255),OUT UserId int(11))
BEGIN
    DECLARE varYantraName longtext;
    DECLARE query varchar(max);
    SELECT YantraName INTO varYantraName FROM yantra WHERE YantraId=varYantraId;
    SET query='SELECT UserId INTO UserId FROM coupon WHERE '+varYantraName+'>0'+' AND DrawDate='+varDrawDate+' AND DrawTime='+varDrawTime;
    EXEC(query);
END //
 
DELIMITER ;

DELIMITER //
CREATE PROCEDURE InsertToWinning(IN varYantraId int(11),
    IN varDrawDate date,
    IN varDrawTime time,
    IN varDrawType varchar(255))
BEGIN
    DECLARE varYantraName longtext;
    DECLARE localYantraId int(11) DEFAULT 1;
    DECLARE query_string varchar(max);
    SELECT YantraName INTO varYantraName FROM yantra WHERE YantraId=localYantraId;
    SET query_string='SELECT UserId FROM coupon WHERE '+varYantraName+'>0'+' AND DrawDate='+varDrawDate+' AND DrawTime='+varDrawTime;
    EXEC(query_string);;
END //
DELIMITER ;

DELIMITER ;
CREATE PROCEDURE InsertToWinning(IN varYantraId int(11),IN varDrawDate date,IN varDrawTime time,IN varDrawType varchar(255))
BEGIN
    DECLARE varYantraName longtext;
    DECLARE localYantraId int(11) DEFAULT 1;
    DECLARE query_string varchar(max);
    SELECT YantraName INTO varYantraName FROM yantra WHERE YantraId=localYantraId;
    SET query_string='SELECT UserId FROM coupon WHERE '+varYantraName+'>0'+' AND DrawDate='+varDrawDate+' AND DrawTime='+varDrawTime;
    EXEC(query_string);
END ;
DELIMITER ;

SET @product_count = (
    SELECT 
        COUNT(*) 
    FROM 
        production.products 
);