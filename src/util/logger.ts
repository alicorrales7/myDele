import { Service } from "typedi";
import { createLogger, transports, format } from "winston";




export const logger = createLogger({
    transports: [
        new transports.File({
            dirname: "logs",
            filename: "winstonLog.log",
        }),
    ],
    format: format.combine(
        format.timestamp(),
        //   format.json(),
        format.printf(({ timestamp, level, message, service }) => {
            return `[${timestamp}] ${service} ${level}: ${message}`;
        })
    ),
    defaultMeta: {
        service: "Behavior Logs",
    },
});

