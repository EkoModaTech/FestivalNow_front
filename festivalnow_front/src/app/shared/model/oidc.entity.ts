export class OIDCEntity{
    access_token: string = ""
    expires_in: string = ""
    refresh_expires_in: string = ""
    refresh_token: string = ""
    token_type: string = ""
    id_token: string = ""
    not_before_policy: string = "" //TODO Remove or fix - to _
    session_state: string = ""
    scope: string = ""
}