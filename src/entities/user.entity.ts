import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  profile_picture_link: string;

  @Column()
  password: string;
}

export { User };
