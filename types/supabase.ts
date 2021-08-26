/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/profile": {
    get: {
      parameters: {
        query: {
          insertedAt?: parameters["rowFilter.profile.insertedAt"];
          updatedAt?: parameters["rowFilter.profile.updatedAt"];
          canLeadSessions?: parameters["rowFilter.profile.canLeadSessions"];
          firstName?: parameters["rowFilter.profile.firstName"];
          lastName?: parameters["rowFilter.profile.lastName"];
          userId?: parameters["rowFilter.profile.userId"];
          canManageShifts?: parameters["rowFilter.profile.canManageShifts"];
          email?: parameters["rowFilter.profile.email"];
          id?: parameters["rowFilter.profile.id"];
          hubspotContactId?: parameters["rowFilter.profile.hubspotContactId"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profile"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profile */
          profile?: definitions["profile"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          insertedAt?: parameters["rowFilter.profile.insertedAt"];
          updatedAt?: parameters["rowFilter.profile.updatedAt"];
          canLeadSessions?: parameters["rowFilter.profile.canLeadSessions"];
          firstName?: parameters["rowFilter.profile.firstName"];
          lastName?: parameters["rowFilter.profile.lastName"];
          userId?: parameters["rowFilter.profile.userId"];
          canManageShifts?: parameters["rowFilter.profile.canManageShifts"];
          email?: parameters["rowFilter.profile.email"];
          id?: parameters["rowFilter.profile.id"];
          hubspotContactId?: parameters["rowFilter.profile.hubspotContactId"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          insertedAt?: parameters["rowFilter.profile.insertedAt"];
          updatedAt?: parameters["rowFilter.profile.updatedAt"];
          canLeadSessions?: parameters["rowFilter.profile.canLeadSessions"];
          firstName?: parameters["rowFilter.profile.firstName"];
          lastName?: parameters["rowFilter.profile.lastName"];
          userId?: parameters["rowFilter.profile.userId"];
          canManageShifts?: parameters["rowFilter.profile.canManageShifts"];
          email?: parameters["rowFilter.profile.email"];
          id?: parameters["rowFilter.profile.id"];
          hubspotContactId?: parameters["rowFilter.profile.hubspotContactId"];
        };
        body: {
          /** profile */
          profile?: definitions["profile"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/room": {
    get: {
      parameters: {
        query: {
          /** Human readable name. */
          name?: parameters["rowFilter.room.name"];
          /** URL path to access this room. */
          slug?: parameters["rowFilter.room.slug"];
          /** Notion property. */
          slideshowName?: parameters["rowFilter.room.slideshowName"];
          /** Notion ID. */
          currentSlideIndex?: parameters["rowFilter.room.currentSlideIndex"];
          timerState?: parameters["rowFilter.room.timerState"];
          timerStartTime?: parameters["rowFilter.room.timerStartTime"];
          timerDuration?: parameters["rowFilter.room.timerDuration"];
          wherebyMeetingId?: parameters["rowFilter.room.wherebyMeetingId"];
          wherebyStartDate?: parameters["rowFilter.room.wherebyStartDate"];
          wherebyEndDate?: parameters["rowFilter.room.wherebyEndDate"];
          wherebyRoomUrl?: parameters["rowFilter.room.wherebyRoomUrl"];
          wherebyHostRoomUrl?: parameters["rowFilter.room.wherebyHostRoomUrl"];
          id?: parameters["rowFilter.room.id"];
          hubspotLeaderListId?: parameters["rowFilter.room.hubspotLeaderListId"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["room"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** room */
          room?: definitions["room"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          /** Human readable name. */
          name?: parameters["rowFilter.room.name"];
          /** URL path to access this room. */
          slug?: parameters["rowFilter.room.slug"];
          /** Notion property. */
          slideshowName?: parameters["rowFilter.room.slideshowName"];
          /** Notion ID. */
          currentSlideIndex?: parameters["rowFilter.room.currentSlideIndex"];
          timerState?: parameters["rowFilter.room.timerState"];
          timerStartTime?: parameters["rowFilter.room.timerStartTime"];
          timerDuration?: parameters["rowFilter.room.timerDuration"];
          wherebyMeetingId?: parameters["rowFilter.room.wherebyMeetingId"];
          wherebyStartDate?: parameters["rowFilter.room.wherebyStartDate"];
          wherebyEndDate?: parameters["rowFilter.room.wherebyEndDate"];
          wherebyRoomUrl?: parameters["rowFilter.room.wherebyRoomUrl"];
          wherebyHostRoomUrl?: parameters["rowFilter.room.wherebyHostRoomUrl"];
          id?: parameters["rowFilter.room.id"];
          hubspotLeaderListId?: parameters["rowFilter.room.hubspotLeaderListId"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          /** Human readable name. */
          name?: parameters["rowFilter.room.name"];
          /** URL path to access this room. */
          slug?: parameters["rowFilter.room.slug"];
          /** Notion property. */
          slideshowName?: parameters["rowFilter.room.slideshowName"];
          /** Notion ID. */
          currentSlideIndex?: parameters["rowFilter.room.currentSlideIndex"];
          timerState?: parameters["rowFilter.room.timerState"];
          timerStartTime?: parameters["rowFilter.room.timerStartTime"];
          timerDuration?: parameters["rowFilter.room.timerDuration"];
          wherebyMeetingId?: parameters["rowFilter.room.wherebyMeetingId"];
          wherebyStartDate?: parameters["rowFilter.room.wherebyStartDate"];
          wherebyEndDate?: parameters["rowFilter.room.wherebyEndDate"];
          wherebyRoomUrl?: parameters["rowFilter.room.wherebyRoomUrl"];
          wherebyHostRoomUrl?: parameters["rowFilter.room.wherebyHostRoomUrl"];
          id?: parameters["rowFilter.room.id"];
          hubspotLeaderListId?: parameters["rowFilter.room.hubspotLeaderListId"];
        };
        body: {
          /** room */
          room?: definitions["room"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/roompermission": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.roompermission.id"];
          roomId?: parameters["rowFilter.roompermission.roomId"];
          profileId?: parameters["rowFilter.roompermission.profileId"];
          /** member | leader | manager */
          type?: parameters["rowFilter.roompermission.type"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["roompermission"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** roompermission */
          roompermission?: definitions["roompermission"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.roompermission.id"];
          roomId?: parameters["rowFilter.roompermission.roomId"];
          profileId?: parameters["rowFilter.roompermission.profileId"];
          /** member | leader | manager */
          type?: parameters["rowFilter.roompermission.type"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.roompermission.id"];
          roomId?: parameters["rowFilter.roompermission.roomId"];
          profileId?: parameters["rowFilter.roompermission.profileId"];
          /** member | leader | manager */
          type?: parameters["rowFilter.roompermission.type"];
        };
        body: {
          /** roompermission */
          roompermission?: definitions["roompermission"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/shiftallocation": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.shiftallocation.id"];
          shiftPatternId?: parameters["rowFilter.shiftallocation.shiftPatternId"];
          profileId?: parameters["rowFilter.shiftallocation.profileId"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["shiftallocation"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** shiftallocation */
          shiftallocation?: definitions["shiftallocation"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.shiftallocation.id"];
          shiftPatternId?: parameters["rowFilter.shiftallocation.shiftPatternId"];
          profileId?: parameters["rowFilter.shiftallocation.profileId"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.shiftallocation.id"];
          shiftPatternId?: parameters["rowFilter.shiftallocation.shiftPatternId"];
          profileId?: parameters["rowFilter.shiftallocation.profileId"];
        };
        body: {
          /** shiftallocation */
          shiftallocation?: definitions["shiftallocation"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/shiftpattern": {
    get: {
      parameters: {
        query: {
          name?: parameters["rowFilter.shiftpattern.name"];
          required_people?: parameters["rowFilter.shiftpattern.required_people"];
          id?: parameters["rowFilter.shiftpattern.id"];
          roomId?: parameters["rowFilter.shiftpattern.roomId"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["shiftpattern"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** shiftpattern */
          shiftpattern?: definitions["shiftpattern"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          name?: parameters["rowFilter.shiftpattern.name"];
          required_people?: parameters["rowFilter.shiftpattern.required_people"];
          id?: parameters["rowFilter.shiftpattern.id"];
          roomId?: parameters["rowFilter.shiftpattern.roomId"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          name?: parameters["rowFilter.shiftpattern.name"];
          required_people?: parameters["rowFilter.shiftpattern.required_people"];
          id?: parameters["rowFilter.shiftpattern.id"];
          roomId?: parameters["rowFilter.shiftpattern.roomId"];
        };
        body: {
          /** shiftpattern */
          shiftpattern?: definitions["shiftpattern"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  profile: {
    insertedAt: string;
    updatedAt: string;
    canLeadSessions: boolean;
    firstName?: string;
    lastName?: string;
    userId?: string;
    canManageShifts: boolean;
    email: string;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    hubspotContactId?: string;
  };
  room: {
    /** Human readable name. */
    name: string;
    /** URL path to access this room. */
    slug: string;
    /** Notion property. */
    slideshowName: string;
    /** Notion ID. */
    currentSlideIndex: number;
    timerState?: string;
    timerStartTime: string;
    timerDuration: number;
    wherebyMeetingId?: string;
    wherebyStartDate?: string;
    wherebyEndDate?: string;
    wherebyRoomUrl?: string;
    wherebyHostRoomUrl?: string;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    hubspotLeaderListId?: string;
  };
  roompermission: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /**
     * Note:
     * This is a Foreign Key to `room.id`.<fk table='room' column='id'/>
     */
    roomId: string;
    /**
     * Note:
     * This is a Foreign Key to `profile.id`.<fk table='profile' column='id'/>
     */
    profileId: string;
    /** member | leader | manager */
    type: string;
  };
  shiftallocation: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /**
     * Note:
     * This is a Foreign Key to `shiftpattern.id`.<fk table='shiftpattern' column='id'/>
     */
    shiftPatternId: string;
    /**
     * Note:
     * This is a Foreign Key to `profile.id`.<fk table='profile' column='id'/>
     */
    profileId: string;
  };
  shiftpattern: {
    name: string;
    required_people: number;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /**
     * Note:
     * This is a Foreign Key to `room.id`.<fk table='room' column='id'/>
     */
    roomId: string;
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** profile */
  "body.profile": definitions["profile"];
  "rowFilter.profile.insertedAt": string;
  "rowFilter.profile.updatedAt": string;
  "rowFilter.profile.canLeadSessions": string;
  "rowFilter.profile.firstName": string;
  "rowFilter.profile.lastName": string;
  "rowFilter.profile.userId": string;
  "rowFilter.profile.canManageShifts": string;
  "rowFilter.profile.email": string;
  "rowFilter.profile.id": string;
  "rowFilter.profile.hubspotContactId": string;
  /** room */
  "body.room": definitions["room"];
  /** Human readable name. */
  "rowFilter.room.name": string;
  /** URL path to access this room. */
  "rowFilter.room.slug": string;
  /** Notion property. */
  "rowFilter.room.slideshowName": string;
  /** Notion ID. */
  "rowFilter.room.currentSlideIndex": string;
  "rowFilter.room.timerState": string;
  "rowFilter.room.timerStartTime": string;
  "rowFilter.room.timerDuration": string;
  "rowFilter.room.wherebyMeetingId": string;
  "rowFilter.room.wherebyStartDate": string;
  "rowFilter.room.wherebyEndDate": string;
  "rowFilter.room.wherebyRoomUrl": string;
  "rowFilter.room.wherebyHostRoomUrl": string;
  "rowFilter.room.id": string;
  "rowFilter.room.hubspotLeaderListId": string;
  /** roompermission */
  "body.roompermission": definitions["roompermission"];
  "rowFilter.roompermission.id": string;
  "rowFilter.roompermission.roomId": string;
  "rowFilter.roompermission.profileId": string;
  /** member | leader | manager */
  "rowFilter.roompermission.type": string;
  /** shiftallocation */
  "body.shiftallocation": definitions["shiftallocation"];
  "rowFilter.shiftallocation.id": string;
  "rowFilter.shiftallocation.shiftPatternId": string;
  "rowFilter.shiftallocation.profileId": string;
  /** shiftpattern */
  "body.shiftpattern": definitions["shiftpattern"];
  "rowFilter.shiftpattern.name": string;
  "rowFilter.shiftpattern.required_people": string;
  "rowFilter.shiftpattern.id": string;
  "rowFilter.shiftpattern.roomId": string;
}

export interface operations {}

export interface external {}
