import React from "react";
import * as moment from "moment";
import { Link } from "react-router-dom";

const formateDate = (date, format) => {
  const dateFormat = format ? format : "DD MMM Y";
  const date1 = moment(new Date(date)).format(dateFormat);
  return date1;
};
const toLowerCase1 = (str) => {
  return str === "" || str === undefined ? "" : str.toLowerCase();
};

const Idno = (cell) => {
  return (
    <Link to="#" className="text-body fw-bold">
      {cell.value ? cell.value : ""}
    </Link>
  );
};

const Pdate = (cell) => {
  return cell.value ? cell.value : "";
};

const Type = (cell) => {
  return cell.value ? cell.value : "";
};

const Value = (cell) => {
  return cell.value ? cell.value : "";
};

const ValueInUsd = (cell) => {
  return cell.value ? cell.value : "";
};

const Amount = (cell) => {
  return cell.value ? cell.value : "";
};

const Coin = (cell) => {
  return cell.value ? cell.value : "";
};

export { Idno, Pdate, Type, Value, Amount, ValueInUsd };
